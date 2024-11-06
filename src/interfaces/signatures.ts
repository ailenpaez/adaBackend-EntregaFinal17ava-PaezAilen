export interface SignatureCreate {
    signatureId?: string; 
    name: string;
    syllabus: string; 
    startDate: Date;  
    endDate: Date;   
}


export interface SignatureUpdate {
    name?: string; 
    syllabus?: string;
    startDate?: Date;
    endDate?: Date;
}
