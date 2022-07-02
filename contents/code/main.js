function init()
{
    const clients = workspace.clientList();

    var client = null;

    for (var i = 0; i < clients.length; i++) {
        let client_caption = clients[i].caption;

        if (client_caption.startsWith(":KTKWIN:"))
        {
            client = clients[i];
            break;
        }
    }

    function toggleClient() {
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
    }

    registerShortcut("ToggleKittyWindow", "ToggleKittyWindow", "F12", toggleClient);
}

init();
