import React from "react";
import DesktopGallery from "./DesktopGallery/DesktopGallery";
import { StyledGallery } from "./GalleryStyles";
import arrayImages from "../../../../../media/imagenes.json";
import TabMobGallery from "./TabletMobileGallery/TabMobGallery";

export default function Gallery(props) {
  return (
    <StyledGallery data-testid="styledGallery">
      <TabMobGallery arrImg={props.arrImg} />
      <DesktopGallery arrImg={props.arrImg} />
    </StyledGallery>
  );
}
