import { Signature } from "../models";
import { SignatureUpdate, SignatureCreate } from "../interfaces/signatures";

class SignatureService {

    static async getAllSignatures() {
        try {
            const signatures = await Signature.findAll();
            return signatures;
        } catch (error) {
            throw new Error("ERROR_FETCHING_ALL_SIGNATURES");
        }
    }

    static async getSignatureById(id: string) {
        try {
            const signature = await Signature.findOne({
                where: { signatureId: id },
            });
            if (!signature) {
                throw new Error("SIGNATURE_NOT_FOUND");
            }
            return signature;
        } catch (error) {
            throw new Error(`ERROR_FETCHING_SIGNATURE | ${error.message}`);
        }
    }

    static async createSignature(newSignature: SignatureCreate) {
        try {
            if (
                !newSignature ||
                !newSignature.name ||
                !newSignature.syllabus ||
                !newSignature.startDate ||
                !newSignature.endDate
            ) {
                throw new Error("MISSING_REQUIRED_FIELDS");
            }

            const existingSignature = await Signature.findOne({
                where: { name: newSignature.name },
            });

            if (existingSignature) {
                throw new Error("NAME_ALREADY_EXISTS");
            }

            const { signatureId, ...createData } = newSignature;
            const createdSignature = await Signature.create(createData);
            return createdSignature;

        } catch (error) {
            throw error; // pal controller
        }
    }

    static async updateSignature(id: string, updateData: SignatureUpdate) {
        try {
            if (!updateData || Object.keys(updateData).length === 0) {
                throw new Error("NO_DATA_TO_UPDATE");
            }

            const signature = await Signature.findOne({ where: { signatureId: id } });
            if (!signature) {
                throw new Error("SIGNATURE_NOT_FOUND");
            }

            if (updateData.name) {
                const existingSignature = await Signature.findOne({
                    where: {
                        name: updateData.name,
                        signatureId: id,//!EXCLUIR ID
                    },
                });

                if (existingSignature) {
                    throw new Error("NAME_ALREADY_EXISTS");
                }
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
                throw new Error("SIGNATURE_NOT_FOUND");
            }

            await signature.destroy();
            return { message: "SIGNATURE_DELETED_SUCCESSFULLY", signature: signature };
        } catch (error) {
            throw error; // VA PAR CONTROLLER
        }
    }

}


export default SignatureService