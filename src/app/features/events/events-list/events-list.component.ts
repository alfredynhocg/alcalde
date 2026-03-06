import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}

  events = [
    { img: 'assets/img/blog/po-blog-single-1.1.png', date: 'Aug 24,2024', time: '11:00 am', title: 'The Economy of the US: What are the Weakest Spots?', desc: 'Our events are more than just gatherings — they are opportunities to connect, learn, & take action together.' },
    { img: 'assets/img/blog/po-blog-single-1.2.png', date: 'Aug 24,2024', time: '11:00 am', title: 'The Right of the US: Lets fight for right in Alabama', desc: 'Whether it\'s a hall meeting, a volunteer rally, or a community workshop, each event is designed to bring people.' },
    { img: 'assets/img/blog/po-blog-single-1.3.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Upcoming Events: Join Action Mark Your Calendar for Next', desc: 'We believe in the power of collective action, & our events are a crucial part of how we engage with the community.' },
    { img: 'assets/img/blog/po-blog-single-1.4.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Be Part of the Movement — Events That Inspire Change', desc: 'You can make a tangible impact & help shape the future we\'re working towards — join us at our upcoming events.' },
    { img: 'assets/img/blog/po-blog-single-1.5.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Stay Connected: Upcoming Invitation to Engage with Us', desc: 'Our events are the heartbeat of our campaign, bringing together supporters, leaders, and community members.' },
    { img: 'assets/img/blog/po-blog-single-1.6.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Street Townsville Sketches And Urban History', desc: 'From intimate discussions on local issues to large-scale rallies, each event is crafted to inspire, inform, & mobilize.' },
    { img: 'assets/img/blog/po-blog-single-1.7.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Take Action: Attend Our Events Where Ideas Become Reality', desc: 'These gatherings provide a platform for you to share your thoughts and connect with others who share your values.' },
    { img: 'assets/img/blog/po-blog-single-1.8.png', date: 'Aug 24,2024', time: '11:00 am', title: 'Engage with Upcoming Events Together for a Better Future', desc: 'We invite you to join us at our upcoming events, where your presence and voice will make a difference.' },
    { img: 'assets/img/blog/po-blog-single-1.9.png', date: 'Aug 24,2024', time: '11:00 am', title: 'City Job Fair 2026 For Civil And Mechanical Engineers', desc: 'Get involved and make your voice heard by joining us at our exciting campaign events!' },
  ];

  ngAfterViewInit(): void { this.scripts.init(); }
}
