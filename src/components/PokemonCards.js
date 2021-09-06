import React, { useState } from "react";

const music = () => {
  const [title, songLink] = useState([
    {
      title: "Mobius Streak",
      songLink:
        "https://open.spotify.com/track/08o9yCplgxLM11ymhvkbl8?si=c0dff3e28bcb4938",
    },
    {
      title: "The World It Softly Lulls",
      songLink:
        "https://open.spotify.com/track/5ZJWZkSQK2cMpFJFw0t9Y0?si=112918e8332249a0",
    },
    {
      title: "Leap Frog",
      songLink:
        "https://open.spotify.com/track/1qDqP46AUKXAUFP6tXjv0r?si=41a8c5aa8be64ddd",
    },
  ]);

  const renderRows = () => {
    return music.map((p) => (
      <tr>
        <td>{p.title}</td>
        <td>
          <img src={p.songLink} />
        </td>
      </tr>
    ));
  };

  return (
    <table
      style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default music;
