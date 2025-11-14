import { atom } from "jotai";
import type { TransportationStatus } from "../types/Homepage";

export const transportAtom = atom<TransportationStatus[]>([
  {
    title: 'Link Light Rail - IDK',
    details: 'Hehe',
    badge: 'Delay',
    source: 'Sound Transit',
  },
  {
    title: 'Link Light Rail — IDK 2',
    details: 'Hehe 2',
    badge: 'Alert',
    source: 'Sound Transit',
  },
]);
