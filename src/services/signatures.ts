import { Signature } from "../models";

class SignatureService {

    static async getAllSignatures(){

        try {
            const signatures = await Signature.findAll();
            return signatures;
        } catch (error) {
            throw new Error("errorcito")
        }
    }

    static async getSignatureById(id: string) {
        try {
            const signature = await Signature.findOne({
                where: { signatureId: id },
            });
            if (!signature) {
                throw new Error("Signature not found");
            }
            return signature;
        } catch (error) {
            throw new Error(`Error fetching signature: ${error.message}`);
        }
    }

    static async createSignature(signatureData: { }) {}

    static async UpdateSignature(signatureData: { }) {}

    static async deleteSignature(signatureData: { }) {}




}


export default SignatureService