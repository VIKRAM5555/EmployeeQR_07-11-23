
export interface ConfiscatedItemsEmployee{
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
	/**	Returned : Data	*/
	checked?: string
	/**	Confiscated : Data	*/
	unchecked?: string
	/**	Name : Data	*/
	user_name?: string
	/**	ID : Data	*/
	id?: string
	/**	Image : Attach Image	*/
	image?: string
	/**	Carry : Data	*/
	carry?: string
	/**	Date : Data	*/
	date?: string
	/**	Image List : Long Text	*/
	imagelist6?: string
	/**	Laptop Serial Number : Data	*/
	employee_number?: string
	/**	Laptop Brand : Data	*/
	employment_type?: string
}