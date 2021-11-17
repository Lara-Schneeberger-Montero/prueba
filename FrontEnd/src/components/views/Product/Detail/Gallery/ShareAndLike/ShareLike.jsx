import React from "react";

export default function ShareLike() {
  function share() {
    alert("compartir");
  }
  function like() {
    alert("me gusta");
  }
  return (
    <div className="ShareLike">
      <i class="fas fa-share-alt" onClick={share}></i>
      <i class="fas fa-heart" onClick={like}></i>
    </div>
  );
}
