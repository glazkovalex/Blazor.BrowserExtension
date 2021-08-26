﻿import BlazorBrowserExtension from "./BlazorBrowserExtension.js";
import BrowserExtensionModes from "./BrowserExtensionModes.js";

/**
 * Initializes the Blazor Browser Extension global variable
 * @param {import("./BlazorBrowserExtension.js").InitializeFunction} initializeAsync The initialize function.
 */
export async function initializeGlobalVariable(initializeAsync) {
  /** @type {BlazorBrowserExtension} */
  let blazorBrowserExtension;

  // initialize global property BlazorBrowserExtension
  if (!globalThis.hasOwnProperty("BlazorBrowserExtension")) {
    blazorBrowserExtension = new BlazorBrowserExtension();
    blazorBrowserExtension.Modes = BrowserExtensionModes;
    globalThis.BlazorBrowserExtension = blazorBrowserExtension;
  } else {
    blazorBrowserExtension = /** @type {BlazorBrowserExtension} */ (globalThis.BlazorBrowserExtension);
  }

  blazorBrowserExtension.InitializeAsync = initializeAsync;
}