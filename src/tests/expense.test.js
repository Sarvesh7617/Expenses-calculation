import request from "supertest";
import { app } from "../app.js";

describe("Expense API", () => {

    test("Should add a new expense", async () => {
        const res = await request(app)
            .post("/api/v1/expenses")
            .send({
                title: "Pizza",
                amount: 500,
                category: "Food"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe("New expense added successfully");
    });

    test("Should get all expenses", async () => {
        const res = await request(app)
            .get("/api/v1/expenses");

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("Should get expenses by category", async () => {
        const res = await request(app)
            .get("/api/v1/expenses/category/Food");

        expect(res.statusCode).toBe(200);
    });

    test("Should get total expenses", async () => {
        const res = await request(app)
            .get("/api/v1/expenses/total");

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("total");
    });

    test("Should delete an expense", async () => {
        const res = await request(app)
            .delete("/api/v1/expenses/1");

        expect(res.statusCode).toBe(200);
    });

});