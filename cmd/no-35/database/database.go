package database

import (
	"database/sql"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"time"
)


const (
	UserName     string = "root"
	Password     string = "123456"
	Addr         string = "127.0.0.1"
	Port         int    = 3306
	Database     string = "no-35"
	MaxLifetime  int    = 10
	MaxOpenConns int    = 10
	MaxIdleConns int    = 10
)

var (
	Connection *gorm.DB
	DB         *sql.DB
)

func init() {
	println("connecting mysql..")
	//組合sql連線字串
	addr := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True", UserName, Password, Addr, Port, Database)
	//連接MySQL
	var err error
	Connection, err = gorm.Open(mysql.Open(addr), &gorm.Config{})
	if err != nil {
		fmt.Println("connection to mysql failed:", err)
		return
	}
	//設定ConnMaxLifetime/MaxIdleConns/MaxOpenConns
	var err1 error
	DB, err1 = Connection.DB()
	if err1 != nil {
		fmt.Println("get db failed:", err)
		return
	}
	DB.SetConnMaxLifetime(time.Duration(MaxLifetime) * time.Second)
	DB.SetMaxIdleConns(MaxIdleConns)
	DB.SetMaxOpenConns(MaxOpenConns)
	println("connecting mysql success")

}
