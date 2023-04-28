// Keep these lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.748.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Place your code here!
        // ----------------------

        TcHmi.Server.Events.registerConsumer(null,
            {
                subscription: function (data) {

                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": false,
                        "positionClass": "toast-top-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "200",
                        "hideDuration": "1000",
                        "timeOut": "3000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }

                    // check if the callback object is valid
                    if (data.error === TcHmi.Errors.NONE) {
                        // check if an event of type message is raised
                        if (data.event.sourceDomain === "TcHmiSrv")
                            return;

                        toastr.info(data.event.text);

                    }

                }

            }
        );
    });
})(TcHmi);
