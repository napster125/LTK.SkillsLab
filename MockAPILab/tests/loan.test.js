const { startMongoServer } = require("./dbHandler");
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");

const mockLoans = [
  {
    loanId: 1,
    borrowers: [
      {
        pairId: 1,
        firstName: "f1",
        lastName: "l1",
        phone: "p1",
      },
      {
        pairId: 2,
        firstName: "f2",
        lastName: "l2",
        phone: "p2",
      },
    ],
  },
  {
    loanId: 2,
    borrowers: [
      {
        pairId: 12,
        firstName: "f12",
        lastName: "l12",
        phone: "p12",
      },
      {
        pairId: 22,
        firstName: "f22",
        lastName: "l22",
        phone: "p22",
      },
    ],
  },
];

beforeAll(async () => {
  await startMongoServer();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Root", () => {
  it("server is live", async () => {
    const response = await request(app).get("/").send();
    expect(response.status).toBe(200);
  });

  it("server ping pone", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.status).toBe(200);
  });
});

describe("Loan", () => {
  it("should create loan", async () => {
    for (let i = 0; i < mockLoans.length; i++) {
      const response1 = await request(app).post("/loan").send(mockLoans[i]);
      expect(response1.status).toBe(201);
    }
  });
  it("fetch loans", async () => {
    const response = await request(app).get("/loans").send();
    const body = response.body;
    expect(body.loans.length).toBe(mockLoans.length);
  });
  it("fetch loan", async () => {
    const response = await request(app)
      .get(`/loan/${mockLoans[0].loanId}`)
      .send();

    expect(response.status).toBe(201);
    expect(response.body.loan.loanId).toBe(mockLoans[0].loanId);
  });
  it("delete loan", async () => {
    const response = await request(app)
      .delete(`/loan/${mockLoans[0].loanId}`)
      .send();

    console.log(response);
    expect(response.status).toBe(201);
  });
});

describe("Borrowers", () => {
  it("update borrower", async () => {
    const response = await request(app)
      .patch("/borrower")
      .send({
        loanId: mockLoans[1].loanId,
        pairId: mockLoans[1].borrowers[1].pairId,
        updatingBorrower: {
          firstName: "s1",
          lastName: "s2",
          phone: "s3",
        },
      });

    const body = response.body;
    expect(body.result.modifiedCount).toBe(1);
  });

  it("delete borrower", async () => {
    const response = await request(app).delete("/borrower").send({
      loanId: mockLoans[1].loanId,
      pairId: mockLoans[1].borrowers[1].pairId,
    });

    const body = response.body;
    expect(body.result.modifiedCount).toBe(1);
  });
});
