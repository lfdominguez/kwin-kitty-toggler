
const clients = workspace.clientList();

let client = null;

for (var i = 0; i < clients.length; i++) {
  let client_caption = clients[i].caption;

  if (client_caption.startsWith(":KTKWIN:"))
  {
    print("Found");
    client = clients[i];
    break;
  }
}

if (client)
{
  if (client.minimized)
  {
    client.setMaximize(true, true);
    client.keepAbove = true;
    client.keepBelow = false;
    workspace.activeClient = client;
  }else{
    client.minimized = true;
  }
}
