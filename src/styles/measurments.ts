export const PADDING_XXS: "0.2rem" = "0.2rem";
export const PADDING_XS: "0.5rem" = "0.5rem";
export const PADDING_SM: "0.8rem" = "0.8rem";
export const PADDING_MD: "1.5rem" = "1.5rem";
export const PADDING_LG: "2.5rem" = "2.5rem";
export const PADDING_XL: "4rem" = "4rem";

export const SCREEN_SM: "700px" = "700px";

export const GRID_SM = 600;
export const GRID_MD = 768;
export const GRID_LG = 992;
export const GRID_XL = 1140;

export const SCREEN_MD_RAW = 950;
export const SCREEN_XL_RAW = 1365;
export const SCREEN_XL = `${SCREEN_XL_RAW}px`;

export const POLLING_INTERVAL = 5000;

export const isMobile = () => {
  if (typeof navigator === "undefined") {
    return null;
  }
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  // return false;
};
