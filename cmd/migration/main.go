package main

import (
	"github.com/akira10315046/no-35/cmd/no-35/database"
	"github.com/akira10315046/no-35/cmd/no-35/models"
)

func main() {
	database.Connection.AutoMigrate(&models.User{})
}
