import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faFacebook: IconDefinition = faFacebook;
  faInstagram: IconDefinition = faInstagram;
  faGithub: IconDefinition = faGithub;
  faLinkedin: IconDefinition = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
