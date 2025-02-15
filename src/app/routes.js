const {Router}  = require ("express");
const routes = new Router();
const customers = require("./app/controllers/CustomersControlle");

routes.get("/customers", customers.index);
routes.get("/customers", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers", customers.update);
routes.delete("/customers", customers.destroy);

    
module.exports = routes;