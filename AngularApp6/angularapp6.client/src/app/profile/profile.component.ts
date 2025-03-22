import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any = null; 
  editableUser: any = {};
  ngOnInit() {
    // جبت البيانات من لوكل
    let storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser); 
      this.editableUser = { ...this.user }; // إنشاء نسخة مستقلة هون استخدم seperated operator عشان ياخد جزء من profile
    }
  }

  updateProfile() {
    // تحديث البيانات في Local Storage
    localStorage.setItem('currentUser', JSON.stringify(this.editableUser));

    //  تحديث البيانات في الصفحة
    this.user = { ...this.editableUser };

   
    let closeButton = document.querySelector('.btn-close') as HTMLElement;
    closeButton.click();

    alert("Profile updated successfully!");
  }
}

//طريقة اخرى باستخدام @input @output

//بعمل editprofile component

//export class EditProfileComponent {
//  @Input() userData: any = {}; // استقبال بيانات المستخدم من ProfileComponent
//  @Output() saveChanges = new EventEmitter<any>(); // إرسال البيانات بعد التعديل
//  @Output() closeModal = new EventEmitter<void>(); // إرسال حدث لإغلاق الـ Modal

//  updateProfile() {
//    this.saveChanges.emit(this.userData); // إرسال البيانات المعدلة إلى ProfileComponent
//    this.closeModal.emit(); // إرسال حدث لإغلاق الـ Modal
//  }
//}

//وهاد بال html تاع componwnt edit profile
//<div class="modal fade show d-block" tabindex = "-1" aria - labelledby="editProfileLabel" >
//  <div class="modal-dialog" >
//    <div class="modal-content" >
//      <div class="modal-header" >
//        <h5 class="modal-title" > Edit Profile </h5>
//          < button type = "button" class="btn-close"(click) = "closeModal.emit()" > </button>
//            </div>
//            < div class="modal-body" >
//              <form #editForm="ngForm"(ngSubmit) = "updateProfile()" >
//                <div class="mb-3" >
//                  <label class="form-label" > Name </label>
//                    < input type = "text" class="form-control"[(ngModel)] = "userData.name" name = "name" required >
//                      </div>
//                      < div class="mb-3" >
//                        <label class="form-label" > Email </label>
//                          < input type = "email" class="form-control"[(ngModel)] = "userData.Email" name = "Email" required >
//                            </div>
//                            < div class="mb-3" >
//                              <label class="form-label" > Password </label>
//                                < input type = "password" class="form-control"[(ngModel)] = "userData.password" name = "password" required >
//                                  </div>
//                                  < button type = "submit" class="btn btn-success" > Save Changes </button>
//                                    </form>
//                                    </div>
//                                    </div>
//                                    </div>
//                                    </div>


//وهاد بعدله بال profile.compinent.ts


//export class ProfileComponent implements OnInit {
//  user: any = null; // بيانات المستخدم
//  showEditModal: boolean = false; // للتحكم في ظهور نافذة التعديل

//  ngOnInit() {
//    let storedUser = localStorage.getItem('currentUser');
//    if (storedUser) {
//      this.user = JSON.parse(storedUser);
//    }
//  }

//  openEditModal() {
//    this.showEditModal = true; // عرض نافذة التعديل
//  }

//  updateUser(updatedUser: any) {
//    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
//    this.user = updatedUser; // تحديث البيانات
//    this.showEditModal = false; // إغلاق نافذة التعديل
//    alert("Profile updated successfully!");
//  }

//  closeEditModal() {
//    this.showEditModal = false; // إغلاق نافذة التعديل
//  }

//  logout() {
//    localStorage.removeItem('currentUser');
//    window.location.href = "/login";
//  }
//}


//وهاد profile.html
//<div class="container mt-5" >
//  <div * ngIf="user; else noUser" class="card p-4 shadow-lg" >
//    <h2 class="text-center" > Welcome, {{ user.name }}!</h2>
//      < p > <strong>Email: </strong> {{ user.Email }}</p >
//        <p><strong>Password: </strong> {{ user.password }}</p >

//          <button class="btn btn-primary"(click) = "openEditModal()" > Edit Profile </button>
//            < button(click)="logout()" class="btn btn-danger ms-2" > Logout </button>
//              </div>

//              < ng - template #noUser >
//                <div class="alert alert-warning text-center" >
//                  <p>No user found.Please sign up or log in.</p>
//                    < a href = "/signup" class="btn btn-primary" > Sign Up </a>
//                      < a href = "/login" class="btn btn-secondary" > Log In </a>
//                        </div>
//                        </ng-template>
//                        </div>

//                        < !-- ✅ عرض نافذة EditProfile عند الحاجة-- >
//                          <app-edit - profile
//                          * ngIf="showEditModal"
//                          [userData] = "user"
//                            (saveChanges) = "updateUser($event)"
//                              (closeModal) = "closeEditModal()" >
//                            </app-edit-profile>
