using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Bestco.Models
{
    [Table("Areas")]
    public class BaggingModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Active { get; set; }
        public string LDAPID { get; set; }
        public string DateCreated { get; set; }
        public string DateModified { get; set; }
    }

    [Table("Lines")]
    public class LinesModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Active { get; set; }
        public string LDAPID { get; set; }
        public string DateCreated { get; set; }
        public string DateModified { get; set; }
    }
}