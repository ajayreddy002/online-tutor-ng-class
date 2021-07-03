import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  customers = [
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
    {
      id: 1255,
      name: "James McAdams",
      country: {
        name: "United States",
        code: "us"
      },
      company: "McAdams Consulting Ltd",
      date: "2014-02-13",
      status: "qualified",
      activity: 23,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      }
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  scrollBack(event) {
    if (event === true) {
      this.customers.push(...this.customers);
      console.log(event, 'hey scrool back')
    }
  }
  scroll(event){
    console.log(event)
  }
}
