using System;

namespace Models {
    
    public class User {

        public long Id {get;set;} = 0;

        public string name { get; set; } = "";

        public string password {get;set;} = "";

        public DateTime DateOfBirth {get;set;} = new DateTime();

    }

}