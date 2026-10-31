"use client";

import { useEffect } from "react";
import { loadBootstrap } from "@/lib/bootstrap-client";

/** Loads Bootstrap's JS so the data-bs-* attributes (modals, tabs, accordions, offcanvas) work. */
export default function BootstrapClient() {
  useEffect(() => {
    loadBootstrap();
  }, []);
  return null;
}
