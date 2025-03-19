import request from "supertest";
import server from "../../server";
import db from "../../config/db";

const testProducts = [
  {
    name: "PC - Test 1",
    price: 25
  },
  {
    name: "PC - Test 2",
    price: 35
  },
  {
    name: "PC - Test 3", 
    price: 45
  }
];

beforeAll(async () => {
  await db.sync({ force: true });
  
  for (const product of testProducts) {
    await request(server)
      .post("/api/products")
      .send(product);
  }
});

describe("POST /api/products", () => {
  it("should display validation errors", async () => {
    const response = await request(server).post("/api/products").send();

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(5)
    expect(response.body.errors[0].msg).toContain("Product name cannot be empty");
    expect(response.body.errors[1].msg).toContain("Product name must be text");
    expect(response.body.errors[2].msg).toContain("Price must be a number");
    expect(response.body.errors[3].msg).toContain("Price cannot be empty");
    expect(response.body.errors[4].msg).toContain("Price cannot be negative");

    expect(response.status).not.toBe(201);
    expect(response.body).not.toHaveProperty("data");
    expect(response.body.errors).not.toHaveLength(4)
  });

  // it('shoud validate that the price is not negative', async () => {
  //   const response = await request(server).post('/api/products').send({
  //     name: 'PC - Test',
  //     price: -6
  //   })

  //   expect(response.status).toBe(400)
  //   expect(response.body).toHaveProperty("errors");
  //   expect(response.body.errors).toHaveLength(1)
  //   expect(response.body.errors[0].msg).toContain("El precio no puede ser negativo");

  //   expect(response.status).not.toBe(201);
  //   expect(response.body).not.toHaveProperty("data");
  // })

  it("should create a new Product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "PC - Test 4",
      price: 25,
    });

    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch('/json')
    expect(response.body).toHaveProperty("data");
    expect(response.body.data.name).toContain("PC - Test");
    expect(response.body.data.price).toBe(25);

    expect(response.status).not.toBe(400);
    expect(response.body).not.toHaveProperty("errors");
  });
});

describe('GET /api/products', () => {
  it('should check if api/products url exists', async () => {
    const response = await request(server).get('/api/products')

    expect(response.status).toBe(200);
    expect(response.status).not.toBe(404);
  })

  it('get a JSON with all products', async () =>  {
    const response = await request(server).get('/api/products')

    expect(response.headers['content-type']).toMatch('/json')
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveLength(4)
    expect(response.body.data[0].name).toContain("PC - Test");
    expect(response.body.data[0].price).toBe(25);
    
    expect(response.body).not.toHaveProperty("errors");
  })
})

describe('GET /api/products/:id', () => {
  it('should return a 404 response for a non-existent product', async () => {
    const productId = 654987932
    const response = await request(server).get(`/api/products/${productId}`)

    expect(response.status).not.toBe(200);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error')
    expect(response.body.error).toBe("Product not found")
  })

  it('should check a valid ID in the URL', async () => {
    const response = await request(server).get('/api/products/not-valid-id')

    expect(response.status).not.toBe(200);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors[0].msg).toBe("Wrong Id")
  })

  it('get a JSON with the product by id', async () => {
    const productId = 1
    const response = await request(server).get(`/api/products/${productId}`)

    expect(response.status).toBe(200);
    expect(response.status).not.toBe(404);
    expect(response.body).toHaveProperty('data')
    expect(response.body.data.name).toBe("PC - Test 1")
    expect(response.body.data.price).toBe(25);
  })
})

describe('PUT /api/products/:id', () => {
  it('should check a valid ID in the URL', async () => {
    const response = await request(server).put('/api/products/not-valid-id').send({
      name: "PC - Test",
      price: 50,
      availability: true
    })

    expect(response.status).not.toBe(200);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors[0].msg).toBe("Invalid ID")
  })

  it("should display validation errors", async () => {
    const response = await request(server).put(`/api/products/1`).send();

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(6)
    expect(response.body.errors[0].msg).toContain("Product name cannot be empty");
    expect(response.body.errors[1].msg).toContain("Product name must be text");
    expect(response.body.errors[2].msg).toContain("Price must be a number");
    expect(response.body.errors[3].msg).toContain("Price cannot be empty");
    expect(response.body.errors[4].msg).toContain("Price cannot be negative");
    expect(response.body.errors[5].msg).toContain("Invalid value for availability");

    expect(response.status).not.toBe(201);
    expect(response.body).not.toHaveProperty("data");
    expect(response.body.errors).not.toHaveLength(4)
  });

  it('should return a 404 response for a non-existent product', async () => {
    const productId = 654987932
    const response = await request(server)
      .put(`/api/products/${productId}`)
      .send({
        name: "PC - Test",
        price: 50,
        availability: true
      });

    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Product not found");
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty("data");
  })

  it('should update an existing product with valid data', async () => {
    const response = await request(server)
      .put(`/api/products/1`)
      .send({
        name: "PC - Test - Updated",
        price: 50,
        availability: true
      });

      expect(response.status).toBe(200);
      expect(response.status).not.toBe(404);
      expect(response.body).toHaveProperty('data')
      expect(response.body).not.toHaveProperty('errors')
      expect(response.body.data.name).toBe("PC - Test - Updated")
      expect(response.body.data.price).toBe(50);
  })
})

describe('PATCH /api/products/:id', () => {
  it('should check a valid ID in the URL', async () => {
    const response = await request(server).patch('/api/products/not-valid-id')

    expect(response.status).not.toBe(200);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors[0].msg).toBe("Wrong Id")
  })

  it('should return a 404 response for a non-existent product', async () => {
    const productId = 654987932
    const response = await request(server).patch(`/api/products/${productId}`)

    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Product not found");
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty("data");
  })

  it('should change visibility to an existing product', async () => {
    const response = await request(server).patch(`/api/products/1`)

      expect(response.status).toBe(200);
      expect(response.status).not.toBe(404);
      expect(response.body).toHaveProperty('data')
      expect(response.body).not.toHaveProperty('errors')
      expect(response.body.data.name).toBe("PC - Test - Updated")
      expect(response.body.data.availability).toBe(false);
  })
})

describe('DELETE api/products/:id', () => {
  it('should check a valid ID in the URL', async () => {
    const response = await request(server).delete('/api/products/not-valid-id')
    
    expect(response.status).not.toBe(200);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors')
    expect(response.body.errors[0].msg).toBe("Wrong Id")
  })
  
  it('should return a 404 response for a non-existent product', async () => {
    const productId = 654987932
    const response = await request(server).delete(`/api/products/${productId}`)
    
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Product not found");
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty("data");
  })
  
  it('should delete an existing product', async () => {
    const response = await request(server).delete(`/api/products/1`);
    
    console.log(response.body)
    
    expect(response.status).toBe(200);
    expect(response.status).not.toBe(404);
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe("Product deleted")
    expect(response.body).not.toHaveProperty('errors')
    
    const newAllRegisters = await request(server).get('/api/products/')
    expect(newAllRegisters.body.data).toHaveLength(3)
  })
})

describe('DELETE api/products/', () => {
  it('should delete all products', async () => {
    const response = await request(server).delete(`/api/products/`);

    console.log(response.body)

      expect(response.status).toBe(200);
      expect(response.status).not.toBe(404);
      expect(response.body).toHaveProperty('message')
      expect(response.body.message).toBe("All products deleted")
      expect(response.body).not.toHaveProperty('errors')

      const newAllRegisters = await request(server).get('/api/products/')
      expect(newAllRegisters.body.data).toHaveLength(0)
  })
})