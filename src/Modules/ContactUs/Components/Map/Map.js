import React from 'react';
import "./Map.css"
function Map() {
    return (
        <div className="map">
          <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.4278039647224!2d29.911389885377105!3d31.208875069580635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2z2YXZg9iq2KjYqSDYp9mE2KXYs9mD2YbYr9ix2YrYqSDYp9mE2KzYr9mK2K_YqQ!5e0!3m2!1sar!2seg!4v1642766652328!5m2!1sar!2seg"            width="1349"
            height="550"
            style={{ border: "0", position: "relative", bottom: "-5px" }}
            loading="lazy"
            title="map"
            allowFullScreen
          ></iframe>
        </div>
      );
}

export default Map;
