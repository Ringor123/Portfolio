import request from "supertest";
import server, { connectDb } from "../server";
import db from "../config/db";
import colors from "colors";

// describe("Control test", () => {
//   it("1 + 1 are 2", () => {
//     expect(1 + 1).toBe(2);
//   });

//   it("1 + 1 are not 3", () => {
//     expect(1 + 1).not.toBe(3)
//   });
// });

describe("Server Initialization", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log successful database connection message", async () => {
    const connectPromise = new Promise(resolve => {
      server.on("ready", resolve);
    });
    
    await connectDb();
    await connectPromise;
    });
  });

jest.mock('../config/db')

describe('connect to DB', () => {
  it('should handle database connection error', async () => {
    jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Unable to connect to the database'))

  const consoleSpy = jest.spyOn(console, 'error')

  await connectDb()

  expect(consoleSpy).toHaveBeenCalledWith(colors.bgRed.bold('Unable to connect to the database'))
  })
})
