function toggleClient()
{
    const clients = workspace.clientList();

    let client = null;

    for (var i = 0; i < clients.length; i++) {
        let resource_name = clients[i].resourceName;

        if (resource_name == "kitty")
        {
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
    } else {
    }
}

registerShortcut("ToggleKittyWindow", "ToggleKittyWindow", "F12", toggleClient);
