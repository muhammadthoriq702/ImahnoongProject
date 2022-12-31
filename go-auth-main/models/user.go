package models

type User struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Kritik     string `json:"kritik"`
	Email    string `json:"email" gorm:"unique"`
}
