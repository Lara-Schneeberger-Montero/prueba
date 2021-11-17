import React, { useState } from "react";
import ShareLike from "../ShareAndLike/ShareLike";
import { StyledDesktopGallery } from "./DesktopGalleryStyles";
import FullGallery from "./FullGallery/FullGallery";

function DesktopGallery({ arrImg }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  function openFullGallery() {
    setGalleryOpen(true);
  }

  function closeFullGallery() {
    setGalleryOpen(false);
  }

  return (
    <StyledDesktopGallery>
      <ShareLike />
      <div className="galleryContainer">
        {(!arrImg) ? <></> : (arrImg.map((e, i) =>
          i < 4 ? (
            <div
              className={`card item${i}`}
              key={e.id}
              alt={e.title}
              style={{ backgroundImage: `url(${e.url})` }}
            ></div>
          ) : (
            ""
          )
        ))}
        <div
          className={`card item4`}
          key={arrImg[4].id}
          alt={arrImg[4].title}
          style={{ backgroundImage: `url(${arrImg[4].url})` }}
          onClick={openFullGallery}
        >
          <div className="btnVerMas">
            <p>+{arrImg.length - 5 > 0 ? arrImg.length - 5 : ""}</p>
          </div>
        </div>
      </div>
      {/* close={setGalleryOpen(false)} */}
      {galleryOpen ? (
        <FullGallery close={closeFullGallery} arrImg={arrImg} />
      ) : (
        ""
      )}
    </StyledDesktopGallery>
  );
}

export default DesktopGallery;
