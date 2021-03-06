exports.up = function(knex, Promise) {
  return knex.schema.createTable("invitations", function(tbl) {
    tbl.increments("id");
    tbl
      .string("inviteCode", 255)
      .notNullable()
      .unique(); // the random code that identifies the invitation
    tbl
      .integer("groupID")
      .references("id")
      .inTable("groups")
      .onDelete("CASCADE")
      .notNullable(); // the id of the group the invitation is to

    tbl.timestamp("expiration").defaultTo(knex.fn.now()); // pass invite expiration upon creation
    tbl.boolean("usedBefore").defaultTo(false); // checks if the code has been visited before
    tbl.timestamp("createdAt").defaultTo(knex.fn.now());
    tbl.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("invitations");
};
