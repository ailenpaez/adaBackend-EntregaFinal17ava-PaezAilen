import { Enrollment, User, Signature } from "../models";

class EnrollmentService {

    static async ViewEnrollments() {

        try {
            const users = await Enrollment.findAll();
            return users;
        } catch (error) {
            throw new Error("no hay")
        }
    }

}

export default EnrollmentService