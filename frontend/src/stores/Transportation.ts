import { atom } from "jotai";
import type { TransportationStatus } from "../types/Homepage";

export const transportAtom = atom<TransportationStatus[]>([
  {
    title: 'I-5 North — collision at Mercer',
    details: 'Lanes 1–2 blocked',
    badge: 'Delay',
    source: 'WSDOT',
  },
  {
    title: 'Link Light Rail — minor delays',
    details: 'Operational',
    badge: 'Alert',
    source: 'Sound Transit',
  },
]);
