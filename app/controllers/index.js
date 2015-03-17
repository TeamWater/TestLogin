var fb = Alloy.Globals.fbModule;

fb.appid = 1580469318879903;
fb.permissions = ['publish_stream'];

fb.addEventListener('login', function(event) {
    if (event.success) {
        alert('Logged In');
    } else if (event.error) {
        alert(event.error);
    } else if (event.cancelled) {
        alert("Canceled");
    }
});

fb.addEventListener('logout', function(event) {
    alert('Logged out');
});


$.fbBtn.style = fb.BUTTON_STYLE_WIDE;
$.index.open();
