import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class StmService {
  private baseUrl =
    'http://www.stm.info/en/ajax/etats-du-service?_=1588642571897';

  constructor(private readonly http: HttpService) {}

  getRawData(): any {
    return this.http.get(this.baseUrl).pipe(map((response) => response.data));
  }

  getHardcodedData(): any {
    return {
      language: 'en',
      status: 'ok',
      metro: {
        '1': {
          name: 'Green line',
          id: '1',
          data: {
            text: 'Normal m\u00e9tro service',
            priority: '88',
            level: 'Metro',
            logic_number: '1343181',
            start_date: '20210121',
            start_time: '1409',
          },
        },
        '2': {
          name: 'Orange line',
          id: '2',
          data: {
            text: 'Normal m\u00e9tro service',
            priority: '88',
            level: 'Metro',
            logic_number: '1336012',
            start_date: '20210121',
            start_time: '2044',
          },
        },
        '4': {
          name: 'Yellow line',
          id: '4',
          data: {
            text: 'Normal m\u00e9tro service',
            priority: '88',
            level: 'Metro',
            logic_number: '1344114',
            start_date: '20210121',
            start_time: '1854',
          },
        },
        '5': {
          name: 'Blue line',
          id: '5',
          data: {
            text: 'Normal m\u00e9tro service',
            priority: '88',
            level: 'Metro',
            logic_number: '1349645',
            start_date: '20210115',
            start_time: '1755',
          },
        },
      },
      'elevators-interne': {
        '10146': {
          station_name: 'Berri-UQAM',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10252': {
          station_name: 'Bonaventure',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10282': {
          station_name: 'Cartier',
          data: [
            {
              text:
                'Cartier m\u00e9tro station : The elevator shuttled between the STM ticket booth level and the platform heading towards C\u00f4te-Vertu is presently out of service. Indefinite period.',
              priority: '76',
              level: 'MetroWorks',
              logic_number: '28222199',
              start_date: '20210115',
              stop_identifier: '10282',
              start_time: '1340',
            },
          ],
          functional: false,
          functional_class: 'non-functional',
        },
        '10258': {
          station_name: 'Champ-de-Mars',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10222': {
          station_name: 'C\u00f4te-Vertu',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10286': {
          station_name: 'De la Concorde',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10224': {
          station_name: 'Du Coll\u00e8ge',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10280': {
          station_name: 'Henri-Bourassa',
          data: [
            {
              text:
                'Henri-Bourassa m\u00e9tro station : The elevator shuttled between the street level and the STM ticket boot level is presently out of service. Indefinite period.',
              priority: '76',
              level: 'MetroWorks',
              logic_number: '28002099',
              start_date: '20210121',
              stop_identifier: '10280',
              start_time: '1530',
            },
          ],
          functional: false,
          functional_class: 'non-functional',
        },
        '10170': {
          station_name: 'Honor\u00e9-Beaugrand',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10272': {
          station_name: 'Jean-Talon',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10132': {
          station_name: 'Lionel-Groulx',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10288': {
          station_name: 'Montmorency',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10256': {
          station_name: 'Place-d\u0027Armes',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10268': {
          station_name: 'Rosemont',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
        '10236': {
          station_name: 'Snowdon',
          data: [{ text: 'Aucun probl\u00e8me \u00e0 cette station' }],
        },
      },
      'bus-interne': {
        mis_a_jour: 1611424395,
        lignes: [
          {
            '10': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '11': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '12': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '14': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '15': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '16': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '17': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '18': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '24': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '25': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '30': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '31': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '33': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '34': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '35': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '36': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '37': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '43': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '45': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '47': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '48': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '49': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '51': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '55': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '57': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '61': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '66': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '68': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '69': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '71': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '74': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '75': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '77': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '78': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '80': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '85': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '90': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '92': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '93': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '94': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '95': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '97': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '100': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '104': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '106': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '107': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '109': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '112': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '115': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '119': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '123': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '124': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '128': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '129': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '138': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '139': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '140': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '144': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '150': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '160': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '161': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '165': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '166': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '168': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '171': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '178': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '179': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '180': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '185': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '189': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '191': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '192': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '193': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '195': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '197': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'tenmax',
                main_category: 'local',
              },
            ],
            '200': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '202': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '204': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '208': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '213': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '217': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '219': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '225': [
              {
                category: 'Local and 10-minutes max',
                cat_class: 'local',
                main_category: 'local',
              },
            ],
            '350': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '354': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '355': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '356': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '358': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '360': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '361': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '362': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '363': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '364': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '365': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '368': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '370': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '371': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '372': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '378': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '380': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '382': [
              {
                category: 'All-night',
                cat_class: 'night',
                main_category: 'night',
              },
            ],
            '401': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '406': [
              {
                category: 'Express',
                cat_class: 'tenmax',
                main_category: 'express',
              },
            ],
            '410': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '419': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '420': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '425': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '427': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '430': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '439': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '445': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '460': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '465': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '468': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '480': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '487': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '495': [
              {
                category: 'Express',
                cat_class: 'express',
                main_category: 'express',
              },
            ],
            '711': [
              {
                category: 'Shuttle',
                cat_class: 'dedicated',
                main_category: 'dedicated',
              },
            ],
            '715': [
              {
                category: 'Shuttle',
                cat_class: 'dedicated',
                main_category: 'dedicated',
              },
            ],
            '747': [
              {
                category: 'Shuttle',
                cat_class: 'dedicated',
                main_category: 'dedicated',
              },
            ],
            '968': [
              {
                category: 'Shuttle',
                cat_class: 'dedicated',
                main_category: 'dedicated',
              },
            ],
          },
        ],
      },
      elevators: {
        'Berri-UQAM': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        Bonaventure: {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        Cartier: {
          status: false,
          text: [
            'Cartier m\u00e9tro station : The elevator shuttled between the STM ticket booth level and the platform heading towards C\u00f4te-Vertu is presently out of service. Indefinite period.',
          ],
        },
        'Champ-de-Mars': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'C\u00f4te-Vertu': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'De la Concorde': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'Du Coll\u00e8ge': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'Henri-Bourassa': {
          status: false,
          text: [
            'Henri-Bourassa m\u00e9tro station : The elevator shuttled between the street level and the STM ticket boot level is presently out of service. Indefinite period.',
          ],
        },
        'Honor\u00e9-Beaugrand': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'Jean-Talon': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'Lionel-Groulx': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        Montmorency: {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        'Place-d\u0027Armes': {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        Rosemont: {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
        Snowdon: {
          status: true,
          text: 'Aucun probl\u00e8me \u00e0 cette station',
        },
      },
      bus: {
        text: 'Service affected on lines:',
        types: {
          '0': {
            list: [
              10,
              11,
              12,
              14,
              15,
              16,
              17,
              18,
              24,
              25,
              30,
              31,
              33,
              34,
              35,
              36,
              37,
              43,
              45,
              47,
              48,
              49,
              51,
              55,
              57,
              61,
              66,
              68,
              69,
              71,
              74,
              75,
              77,
              78,
              80,
              85,
              90,
              92,
              93,
              94,
              95,
              97,
            ],
            text: 'Service affected on Local and 10-minutes max',
            cat: ['local', 'tenmax'],
          },
          '1': {
            list: [
              100,
              104,
              106,
              107,
              109,
              112,
              115,
              119,
              123,
              124,
              128,
              129,
              138,
              139,
              140,
              144,
              150,
              160,
              161,
              165,
              166,
              168,
              171,
              178,
              179,
              180,
              185,
              189,
              191,
              192,
              193,
              195,
              197,
            ],
            text: 'Service affected on Local and 10-minutes max',
            cat: ['local', 'tenmax'],
          },
          '2': {
            list: [200, 202, 204, 208, 213, 217, 219, 225],
            text: 'Service affected on Local and 10-minutes max',
            cat: ['local'],
          },
          '3': {
            list: [
              350,
              354,
              355,
              356,
              358,
              360,
              361,
              362,
              363,
              364,
              365,
              368,
              370,
              371,
              372,
              378,
              380,
              382,
            ],
            text: 'Service affected on All-night',
            cat: ['night'],
          },
          '4': {
            list: [
              401,
              406,
              410,
              419,
              420,
              425,
              427,
              430,
              439,
              445,
              460,
              465,
              468,
              480,
              487,
              495,
            ],
            text: 'Service affected on Express',
            cat: ['express', 'tenmax'],
          },
          '7': {
            list: [711, 715, 747],
            text: 'Service affected on Shuttle',
            cat: ['dedicated'],
          },
          '9': {
            list: [968],
            text: 'Service affected on Shuttle',
            cat: ['dedicated'],
          },
        },
      },
      ucmus: false,
    };
  }
}
