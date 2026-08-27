import { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        document.getElementById("google_translate_element")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,fr,de,es,ar,ru,ja",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    const existingScript = document.querySelector(
      'script[src*="translate.google.com/translate_a/element.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      initializeGoogleTranslate();
    }

    return () => {
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;