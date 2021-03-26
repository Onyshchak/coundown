import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-download-center',
  templateUrl: './download-center.component.html',
  styleUrls: ['./download-center.component.scss']
})
export class DownloadCenterComponent implements OnInit {
  informationList: any[] = [
    {
      name: 'Study summary- UV-induced effects on the epigenome: Repetitive irradiation with sub-erythemal UV dose induces changes in ' +
          'human epidermis on three cellular levels: DNA structure, epigenetic DNA methylation and gene expression',
      file: 'Study-summary-UV-induced-effects-on-the-epigenome.pdf'
    },
    {
      name: 'Efficacy of an Ointment Body Spray (OBS) to improve the appearance of dry, ashy skin and alleviate moderate to severe ' +
          'dryness on the heel',
      file: 'Aquaphor-Efficacy-of-an-Ointment-Body-Spray-EADV2020.pdf'
    },
    {
      name: 'Study summary- Publication DKFZ & BDF: Methylation profiling identifies two subclasses of squamous cell carcinoma related ' +
          'to distinct cells of origin',
      file: 'Study-summary-Publication-DKFZ-BDF.pdf'
    },
    {
      name: 'Skin regeneration in dermatological practice: Real-world-evidence insights on usage and indications of Skin ' +
          'Regeneration Ointments',
      file: 'Aquaphor-Standard-Reparing-Ointments-in-Derm-Practice-EADV2020.pdf'
    },
    {
      name: 'Study Summary - Adjunctive Urea-based Cream can reduce hand-foot skin reactions and improve quality of life in patients ' +
          'treated with multikinase inhibitor sorafenib',
      file: 'Adjunctiv-Urea-basedCream.pdf'
    },
    // {
    //   name: 'Topical Hyaluronic acid vs. Standard of Care for the Prevention of Radiation Dermatitis after Adjuvant Radiotherapy for ' +
    //       'Breast Cancer: Single-Blind Randomized Phase III Clinical Trial',
    //   file: 'src'
    // },
    {
      name: 'Shifting the perfume paradigm: A novel allergen-depleted fragrance composition provides anti-inflammatory effects in ' +
          'vitro and soothes xerotic skin in vivo to enhance patients treatment adherence',
      file: 'Shifting-the-perfume-paradigm-EADV-2020.pdf'
    },
    {
      name: 'Study Summary: Diagnosis and Treatment of Xerosis Cutis - a Position Paper',
      file: 'Xerosis-Cutis.pdf'
    },
    {
      name: 'A moisturizing Ointment Body Spray to help alleviate dry skin symptoms associated with Atopic eczema, Psoriasis, and Xerosis',
      file: 'Aquaphor-Efficacy-of-an-Moisturizing-Spray-EADV2020.pdf'
    },
  ];
  headerList: any[] = [
    {
      name: 'Eucerin Product guide 2021',
      file: 'Eucerin-guide-2021.pdf'
    },
    {
      name: 'Unna training catalogue 2021',
      file: 'Unna-Academy-catalogue-2021.pdf'
    },
    {
      name: 'Unna Academy brochure',
      file: 'Unna-Academy-brochure-2021.pdf'
    }
  ];
  selectedIndexes: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelected(i: number): void {
    if (!this.selectedIndexes.includes(i)) {
      this.selectedIndexes.push(i);
    } else {
      this.selectedIndexes.splice(this.selectedIndexes.indexOf(i), 1);
    }
  }

  downloadSelected(): void {
    const allFiles = [...this.headerList, ...this.informationList];
    this.selectedIndexes.forEach(i => {
      FileSaver.saveAs(`/assets/files/${allFiles[i].file}`, allFiles[i].file);
    });
    this.selectedIndexes = [];
  }
}
