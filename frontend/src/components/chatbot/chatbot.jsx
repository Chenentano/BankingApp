import React, { Component } from 'react';

class Chatbot extends Component {

    componentDidMount() {
        if (!window.kommunicate) {
            (function(d, m){
                var kommunicateSettings = {"appId":"<db447252d5a393cef5d729181537b4a7>","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                s.integrity = "sha384-expectedHashHere";
                s.crossOrigin = "anonymous";
                const h = document.getElementsByTagName("head")[0];
                h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        }
    }

    render() {
        return (
            <div></div>
        );
    }

}

export default Chatbot;