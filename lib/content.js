function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

window._hasRun = window._hasRun || false;

window.onload = async function() {
	setCookie('historiasinglefile', 'installed', 1);

    //if(!window._hasRun) {
    //    window._hasRun = true;
    //    window.open('https://historia.network/', '_blank');
    //}

    //console.log('attempting to save page');
    //message = {};
    //let data = await globalThis.singlefile.getPageData();
    //console.log('data', data);

    //autosave.onMessage("autosave.", null);
}