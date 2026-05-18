import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import Badge from "../../components/Badge";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

export default function Components() {
    return (
      <>
        <Container className="bg-gray-200 p-6"> 
            <div id="dashboard-container">
                <PageHeader title="Components"/>
                <p className="mb-4 text-gray-600">Ini halaman Components</p>

        
                <div className="mb-4 flex flex-wrap gap-2">
                    <Button>Simpan</Button>
                    <Button type="danger">Hapus</Button>
                    <Button type="secondary">Hapus</Button>
                    <Button type="warning">Cetak</Button>
                </div>
                
                
                <div className="mb-4 flex flex-wrap gap-2">
                    <Badge>Berhasil!</Badge>
                    <Badge type="success">Berhasil!</Badge>
                    <Badge type="warning">Kurang</Badge>
                </div>

                <div className="mb-4 flex flex-wrap gap-3">
                    <Avatar name="Naufal" />
                    <Avatar name="Surya" />
                    <Avatar name="Nigsih" />
                </div>
            </div>

        </Container>
        <Footer/>
        </>
        
    );
}