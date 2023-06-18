import React from "react";

export default function ChannelInfo({ id, title }) {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
}
