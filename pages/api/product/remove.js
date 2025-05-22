import { removeFunc } from "@/helpers/api-func";

export default function handler(req, res) {
    removeFunc(req, res, "product");
}