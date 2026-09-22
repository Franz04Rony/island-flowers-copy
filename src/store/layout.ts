import { atom } from "nanostores"

export type ModalKind = "letter" | "bridge"

const $activeModal = atom<ModalKind | null>(null)

export { $activeModal }
