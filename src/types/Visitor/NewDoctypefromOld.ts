import { imagelinks } from './imagelinks'

export interface NewDoctypefromOld{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Employee : Link - Employee	*/
	employee_doctype?: string
	/**	Attendance : Link - Attendance	*/
	attendance_doctype?: string
	/**	Time : Data	*/
	time?: string
	/**	Image : Attach Image	*/
	image?: string
	/**	Carry : Data	*/
	carry?: string
	/**	Date : Data	*/
	date?: string
	/**	imageList6 : Long Text	*/
	imagelist6?: string
	/**	Laptop Serial : Data	*/
	laptop_serial?: string
	/**	Laptop Brand : Data	*/
	laptop_brand?: string
	/**	id : Data	*/
	id?: string
	/**	Return : Data	*/
	checked?: string
	/**	Balance : Data	*/
	unchecked?: string
	/**	Status : Data	*/
	status?: string
	/**	imagelinks : Table - imagelinks	*/
	imagelinks?: imagelinks[]
	/**	Location : Data	*/
	location?: string
	/**	Security : Select	*/
	security?: "pending" | "Approved" | "Rejected"
	/**	Test Image : Attach Image	*/
	test_image?: string
	/**	Test Image1 : Image	*/
	test_image1?: string
}