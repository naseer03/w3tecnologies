"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { loadBootstrap } from "@/lib/bootstrap-client";

/** The "OK" pop-up the admin pages show after a redirect such as ?login=failed. Opens when `message` is set. */
export default function StatusModal({ message }: { message?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!message || !ref.current) return;
    const el = ref.current;
    loadBootstrap().then(({ Modal }) => Modal.getOrCreateInstance(el).show());
  }, [message]);

  if (!message) return null;
  return (
    <div className="modal fade" ref={ref} tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" />
          <div className="modal-body">
            <b>{message}</b>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
