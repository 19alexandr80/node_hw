const cont = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await cont.listContacts();
      console.log(list);
      break;

    case "get":
      const userById = await cont.getContactById(id);
      console.log(userById);
      break;

    case "add":
      const addCont = await cont.addContact({ name, email, phone });
      console.log(addCont);
      break;

    case "remove":
      const deleteCont = await cont.removeContact(id);
      console.log(deleteCont);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
