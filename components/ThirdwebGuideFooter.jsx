import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #096bec",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            href="",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/spheron.svg"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "crosshair" }}
          onClick={() =>
            window.open(
              "https://spheron.network",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
