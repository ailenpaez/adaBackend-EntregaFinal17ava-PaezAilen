import { Signature } from "../models";
import { SignatureUpdate } from "../interfaces/signatures";

class SignatureService {

    static async getAllSignatures() {

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

    static async createSignature(signatureData: { name: string; syllabus: string; startDate: Date; endDate: Date }) {
        try {
            const existingSignature = await Signature.findOne({ where: { name: signatureData.name } });
            if (existingSignature) {
                const error = new Error("SIGNATURE_ALREADY_EXISTS");
                (error as any).status = 409;
                throw error;
            }

            const newSignature = await Signature.create(signatureData);
            return newSignature;
        } catch (error) {
            throw error;
        }
    }

    static async updatedSignature(id: string, updateData: SignatureUpdate) {
        try {
            const signature = await Signature.findOne({ where: { signatureId: id } });
            if (!signature) {
                const error = new Error("SIGNATURE_NOT_FOUND");
                (error as any).status = 404;
                throw error;
            }

            await signature.update(updateData);

            return signature;
        } catch (error) {
            throw error;
        }
    }

    static async deleteSignature(id: string) {
        try {
            const signature = await Signature.findOne({ where: { signatureId: id } });
            if (!signature) {
                const error = new Error("SIGNATURE_NOT_FOUND");
                (error as any).status = 404;
                throw error;
            }

            await signature.destroy();
            return { message: "SIGNATURE_DELETED_SUCCESSFULLY", signature: signature };
        } catch (error) {
            throw new Error(`WHAT?! ${error.message || error}`);
        }
    }

}


export default SignatureService