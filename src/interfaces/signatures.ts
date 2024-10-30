export interface SignatureCreate {
    signatureId?: number; 
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
