export interface SignatureCreate {
    signatureId?: number; // Opcional si es generado automáticamente
    name: string;
    syllabus: string; // URL o enlace al syllabus
    startDate: Date;  // Fecha de inicio
    endDate: Date;    // Fecha de fin
}


export interface SignatureUpdate {
    name?: string; 
    syllabus?: string;
    startDate?: Date;
    endDate?: Date;
}
