import { ConeGeometry, MeshBasicMaterial, Mesh} from 'three';

export default function (color) {
    var geomerty = new ConeGeometry(5,20,32);
    var material = new MeshBasicMaterial({color: color});
    var cone = new Mesh(geomerty, material);
    return cone
}