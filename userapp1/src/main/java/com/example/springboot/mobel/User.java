package com.example.springboot.mobel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="user")
public class User {
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Id
	@Column(name="id")
	private int id;
	 @Column(name="username") 
	private String userName;
	 @Column(name="useremailid")
	private String userEmailId;
	 @Column(name="userpassword")
	private String userPassword;
	public User(int id, String userName, String userEmailId, String userPassword) {
		super();
		this.id = id;
		this.userName = userName;
		this.userEmailId = userEmailId;
		this.userPassword = userPassword;
	}
	public User() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setid(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmailId() {
		return userEmailId;
	}
	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	@Override
	public String toString() {
		return "User [userid=" + id + ", userName=" + userName + ", userEmailId=" + userEmailId + ", userPassword="
				+ userPassword + "]";
	}
	


}
